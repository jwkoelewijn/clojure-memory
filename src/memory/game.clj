(ns memory.game)

(def faces [:h1 :h1 :h2 :h2
            :h3 :h3 :h4 :h4
            :h5 :h5 :fg :fg
            :zo :zo :zo :gy])

(defn ->tile [face]
  {:face face})

(defn create-board []
  (shuffle (map ->tile faces)))

(defn create-game []
  {:tiles (create-board)
   :sand (repeat 30 :remaining)
   :ticks 0})

(defn revealed-tiles [game]
  (->> game
       :tiles
       (filter :revealed?)))

(defn update-tiles [game f]
  (update-in game [:tiles] #(mapv f %)))

(defn can-reveal? [game]
  (> 2 (count (revealed-tiles game))))

(defn- is-match? [game]
  (let [revealed (revealed-tiles game)]
    (when (and (= 2 (count revealed))
             (= 1 (count (set (map :face revealed)))))
      (:face (first revealed)))))

(defn replace-remaining [sand replacement]
  (take (count sand)
    (concat
      (take-while (complement #{:remaining}) sand)
      replacement
      (->> (drop-while (complement #{:remaining}) sand)
           (drop (count replacement))))))

(defn wake-the-dead [tile]
  (if (= :gy (:face tile))
    (assoc tile :face :zo)
    tile))

(defn perform-match-actions [game match]
  (case match
    :fg (assoc game :foggy? true)
    :zo (-> game
            (update-in [:sand] #(replace-remaining % (repeat 3 :zombie)))
            (update-tiles wake-the-dead))
    game))

(defn- match-revealed [tile]
  (if (:revealed? tile)
    (-> tile (assoc :matched? true) (dissoc :revealed?))
    tile))

(defn- check-for-match [game]
  (if-let [match (is-match? game)]
    (-> game
      (update-tiles match-revealed)
      (perform-match-actions match))
    game))

(defn init-concealment [tile]
  (if (:revealed? tile)
    (assoc tile :conceal-countdown 5)
    tile))

(defn check-for-concealment [game]
  (if-not (can-reveal? game)
    (update-tiles game init-concealment)
    game))

(defn found-all-the-houses? [game]
  (->> (:tiles game)
       (remove :matched?)
       (map :face)
       (not-any? #{:h1 :h2 :h3 :h4 :h5})))

(defn check-for-completion [game]
  (if (found-all-the-houses? game)
    (assoc game :complete-countdown 3)
    game))

(defn reveal-tile [game index]
  (if (can-reveal? game)
    (-> game
      (assoc-in [:tiles index :revealed?] true)
      (check-for-match)
      (check-for-concealment)
      (check-for-completion))
    game))

(defn- hide-faces [tile]
  (if (or (:revealed? tile)
          (:matched? tile)
          (:conceal-countdown tile))
    tile
    (dissoc tile :face)))

(defn- assoc-ids [tiles]
  (map-indexed #(assoc %2 :id %1) tiles))

(defn prep [game]
  (-> game
    (update-in [:tiles] assoc-ids)
    (update-tiles hide-faces)))

(defn conceal-faces [tile]
  (case (:conceal-countdown tile)
    nil tile
    3 (-> tile (dissoc :revealed?) (update :conceal-countdown dec))
    1 (dissoc tile :conceal-countdown)
    (update tile :conceal-countdown dec)))

(defn count-down-sand [game]
  (if (= 0 (mod (:ticks game) 5))
    (update game :sand #(replace-remaining % [:gone]))
    game))

(defn on-last-round? [game]
  (= 90 (count (:sand game))))

(defn find-face-index [game face]
  (first (keep-indexed (fn [index tile]
                        (when (and (= face (:face tile))
                                   (not (:revealed? tile)))
                          index))
                (:tiles game))))

(defn reveal-one [face game]
  (reveal-tile game (find-face-index game face)))

(defn reveal-two [face game]
  (->> game (reveal-one face) (reveal-one face)))

(defn complete-round [game]
  (if (on-last-round? game)
    (assoc game :safe? true)
    (-> game
      (update :sand #(concat % (repeat 30 :remaining)))
      (assoc :tiles (create-board)))))

(defn count-down-completion [game]
  (case (:complete-countdown game)
    nil game
    1 (-> game
          (dissoc :complete-countdown)
          (dissoc :foggy?)
          (complete-round))
    (update game :complete-countdown dec)))


(defn tick [game]
  (if (not-any? #{:remaining} (:sand game))
    (assoc game :dead? true)
    (-> game
      (update :ticks inc)
      (count-down-sand)
      (count-down-completion)
      (update-tiles conceal-faces))))

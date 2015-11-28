(ns memory.game-test
  (:require [memory.game :refer :all]
            [expectations :refer :all]))

(defn find-face-index [game face]
  (first (keep-indexed (fn [index tile]
                  (when (and (= face (:face tile))
                             (not (:revealed? tile)))
                    index))
                (:tiles game))))

(defn reveal-one [face game]
  (reveal-tile game (find-face-index game face)))

;; create-game
(expect {:h1 2 :h2 2 :h3 2 :h4 2 :h5 2 :fg 2 :zo 3 :gy 1}
        (->> (create-game)
             :tiles
             (map :face)
             frequencies))

(expect #(< 10 %) (count (set (repeatedly 100 create-game))))

(expect {:remaining 30} (frequencies (:sand (create-game))))

;; revealing tiles
(expect 1 (->> (reveal-tile (create-game) 0)
     :tiles
     (filter :revealed?)
     count))

(expect #{{:face :h1 :revealed? true}
          {:face :h2 :revealed? true}}
    (->> (create-game)
     (reveal-one :h1)
     (reveal-one :h2)
     (reveal-one :h3)
     :tiles
     (filter :revealed?)
     (set)))

;; Matching pair
(expect [{:face :h1 :matched? true}
         {:face :h1 :matched? true}]
    (->> (create-game)
     (reveal-one :h1)
     (reveal-one :h1)
     :tiles
     (filter :matched?)))

;; After a match, revealing is possible
(expect #{{:face :h3 :revealed? true}}
    (->> (create-game)
     (reveal-one :h1)
     (reveal-one :h1)
     (reveal-one :h3)
     :tiles
     (filter :revealed?)
     (set)))

;; Matching 2 foggy tiles makes the board foggy
(expect (->> (create-game)
     (reveal-one :fg)
     (reveal-one :fg)
     :foggy?))

;; Matching zombies looses sands
(expect [:zombie :zombie :zombie :remaining] 
    (->> (create-game)
     (reveal-one :zo)
     (reveal-one :zo)
     :sand
     (take 4)))

;; Matching zombies turns the graveyard into a zombie
(expect {:h1 2 :h2 2 :h3 2 :h4 2 :h5 2 :fg 2 :zo 4}
    (->> (create-game)
     (reveal-one :zo)
     (reveal-one :zo)
     :tiles
    (map :face)
    frequencies))

;; Prepping the game
(expect {nil 16} (->> (create-game)
     prep
     :tiles
     (map :face)
     frequencies))

;; Prepping the game keeps revealed faces
(expect {nil 15 :h1 1} 
  (->> (create-game)
       (reveal-one :h1)
       prep
       :tiles
       (map :face)
       frequencies))

;; Prepping the game keeps matched faces
(expect {nil 14 :h2 2} 
  (->> (create-game)
       (reveal-one :h2)
       (reveal-one :h2)
       prep
       :tiles
       (map :face)
       frequencies))

;; A prepped game gives an vector of indices
(expect (range 0 16)
  (->> (create-game)
       prep
       :tiles
       (map :id)))

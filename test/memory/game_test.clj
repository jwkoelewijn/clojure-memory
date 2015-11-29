(ns memory.game-test
  (:require [memory.game :refer :all]
            [expectations :refer :all]))



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

(expect [:h1 :h2]
  (->> (create-game)
    (reveal-one :h1)
    (reveal-one :h2)
    (reveal-one :h3)
    :tiles
    (filter :revealed?)
    (map :face)
    (sort)))

;; Matching pair
(expect [:h1 :h1]
  (->> (create-game)
    (reveal-one :h1)
    (reveal-one :h1)
    :tiles
    (filter :matched?)
    (map :face)))

;; After a match, revealing is possible
(expect [:h3]
  (->> (create-game)
    (reveal-one :h1)
    (reveal-one :h1)
    (reveal-one :h3)
    :tiles
    (filter :revealed?)
    (map :face)))

;; Matching 2 foggy tiles makes the board foggy
(expect 
  (->> (create-game)
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
(expect {nil 16} 
  (->> (create-game)
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

;; tick - timing for concealment
(expect 2 (->> (create-game)
     (reveal-one :h1)
     (reveal-one :h2)
     tick tick
     :tiles (filter :revealed?) count))

(expect 0 (->> (create-game)
     (reveal-one :h1)
     (reveal-one :h2)
     tick tick tick
     :tiles (filter :revealed?) count))

;; faces should stick around for 4 ticks
;; to prevent animation artifacts
;; in other words, do not remove faces
;; before the animation of concealing faces
;; is done
(expect {nil 14 :h1 1 :h2 1} 
  (->> (create-game) (reveal-one :h1) (reveal-one :h2)
       tick tick tick tick
       prep :tiles (map :face)
       frequencies))

;; handling remaining time

(defn tick-n [n game]
  (first (drop n (iterate tick game))))

(expect [:gone :remaining] 
  (->> (create-game)
    (tick-n 5)
    :sand (take 2)))

(expect {:gone 30}
  (->> (create-game)
    (tick-n 155)
    :sand frequencies))

(expect
  (->> (create-game)
    (tick-n 151)
    :dead?))

(defn reveal-all-houses [game]
  (reduce #(reveal-two %2 %1) game [:h1 :h2 :h3 :h4 :h5]))

(expect (not (->> (create-game)
                  (reveal-all-houses)
                  tick tick
                  :safe?)))

;; Multiple rounds
(expect 60 (->> (create-game)
                (reveal-all-houses) tick tick tick
                :sand count))

;; The board is reset
(expect empty? (->> (create-game)
                    (reveal-all-houses) tick tick tick
                    :tiles (filter :matched?)))

(expect 90 (->> (create-game)
                (reveal-all-houses) tick tick tick
                (reveal-all-houses) tick tick tick
                :sand count))

(expect (->> (create-game)
             (reveal-all-houses) tick tick tick
             (reveal-all-houses) tick tick tick
             (reveal-all-houses) tick tick tick
             :safe?))

;; Resetting foggy
(expect (->> (create-game)
             (reveal-two :fg)
             :foggy?))

(expect (not (->> (create-game)
             (reveal-two :fg)
             (reveal-all-houses) tick tick tick
             :foggy?)))

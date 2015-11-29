(ns memory.game-loop
  (:require [clojure.core.async :refer [go <! >! alts! chan timeout go-loop close!]]
            [memory.game :refer [create-game reveal-tile prep tick reveal-two]]))

(defn tick-every [ms]
  (let [c (chan)]
    (go-loop []
      (<! (timeout ms))
      (when (>! c :tick)
        (recur)))
    c))

(defn game-on? [{:keys [safe? dead?]}]
  (not (or safe? dead?)))

(defn start-game-loop [ws-channel]
  (go
    (let [tick-ch (tick-every 200)]
      (loop [game (->> (create-game) (reveal-two :h1) (reveal-two :h2))]
        (>! ws-channel (prep game))
        (if (game-on? game)
          (when-let [[value port] (alts! [ws-channel tick-ch])]
            (condp = port
              ws-channel (recur (reveal-tile game (:message value)))
              tick-ch (recur (tick game))))
          (do
            (<! tick-ch)
            (close! tick-ch)
            (close! ws-channel)))))))


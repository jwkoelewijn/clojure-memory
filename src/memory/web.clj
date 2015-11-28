(ns memory.web
  (:require [chord.http-kit :refer [with-channel]]
            [clojure.core.async :refer [go <! >!]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [resources]]
            [memory.game :refer [create-game reveal-tile prep]]))

(defn ws-handler [req]
  (with-channel req ws-channel ;;ws-channel is automatically bound by the with-channel macro
    (go
      (loop [game (create-game)]
        (>! ws-channel (prep game))
        (when-let [tile-index (:message (<! ws-channel))]
          (recur (reveal-tile game tile-index)))))))

(defroutes app
  (GET "/ws" [] ws-handler)
  (resources "/"))

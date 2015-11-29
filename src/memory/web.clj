(ns memory.web
  (:require [chord.http-kit :refer [with-channel]]
            [compojure.core :refer [defroutes GET]]
            [clojure.java.io :as io]
            [compojure.route :refer [resources]]
            [memory.game-loop :refer [start-game-loop]]))


(defn ws-handler [req]
  (with-channel req ws-channel ;;ws-channel is automatically bound by the with-channel macro
    (start-game-loop ws-channel)))

(defroutes app
  (GET "/ws" [] ws-handler)
  (GET "/" [] (slurp (io/resource "public/index.html")))
  (resources "/"))

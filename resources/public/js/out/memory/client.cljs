(ns memory.client
  (:require [memory.components :refer [render-game]]
            [cljs.core.async :refer [<!]]
            [chord.client :refer [ws-ch]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:refer-clojure :exclude [uuid]))

(def container (.getElementById js/document "main"))

(defonce run-once ;; this is to make sure we do not reconnect every reload when using figwheel
  (go
    (let [{:keys [ws-channel error]} (<! (ws-ch "ws://bauke.herokuapp.com/ws"))]
      (when error (throw error))
      (loop []
        (when-let [game (:message (<! ws-channel))]
          (render-game game container ws-channel)
            (cond
              (:dead? game) (set! (.-className (.-body js/document)) "game-over")
              (:safe? game) (set! (.-location js/document) "/safe.html")
              :else (recur)))))))

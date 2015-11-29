(ns memory.system
  (:gen-class)
  (:require [org.httpkit.server :refer [run-server]]
            [com.stuartsierra.component :as component]
            [memory.web :refer [app]]))

(defn start-server [handler port]
  (let [server (run-server handler {:port port})]
    (println (str "Started server on localhost:" port))
    server))

(defn stop-server [server]
  (when server
    (server))) ;; run-server returned a fn that stops the server

(defrecord Memory []
  component/Lifecycle
  (start [this]
    (assoc this :server (start-server #'app 9009)))
  (stop [this]
    (stop-server (:server this))
    (dissoc this :server)))

(defn create-system []
  (Memory.))

(defn -main [& args]
  (.start (create-system)))

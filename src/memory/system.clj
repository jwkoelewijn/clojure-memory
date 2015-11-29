(ns memory.system
  (:gen-class)
  (:import (java.lang Integer System))
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

(defrecord Memory [port]
  component/Lifecycle
  (start [this]
    (assoc this :server (start-server #'app port)))
  (stop [this]
    (stop-server (:server this))
    (dissoc this :server)))

(defn create-system [port]
  (map->Memory {:port port}))

(defn -main [& args]
  (let [port (Integer/parseInt (or (System/getenv "PORT") "9009"))]
    (.start (create-system port))))

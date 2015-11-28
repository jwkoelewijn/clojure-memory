(defproject memory "0.1.0-SNAPSHOT"
  :description "Memory game to gift with Saint Nicholas to Bauke"
  :url ""
  :jvm-opts ["-XX:MaxPermSize=256m"]
  :dependencies [[org.clojure/clojure "1.7.0"]]
  :profiles {:dev {:plugins []
                   :dependencies []
                   :source-paths ["dev"]}})

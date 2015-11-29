(defproject memory "0.1.0-SNAPSHOT"
  :description "Memory game to gift with Saint Nicholas to Bauke"
  :url ""
  :main memory.system
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [http-kit "2.1.18"]
                 [com.stuartsierra/component "0.2.3"]
                 [compojure "1.3.4"]
                 [quiescent "0.2.0-RC2"]
                 [expectations "2.1.2"]
                 [jarohen/chord "0.6.0"]]
  :min-lein-version "2.0.0"
  :uberjar-name "memory.jar"
  :jvm-opts ["-server"]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.7"]]
  :hooks [leiningen.cljsbuild]
  :profiles {:uberjar {:omit-source true
                       :aot :all}
             :dev {
                   :dependencies [[reloaded.repl "0.1.0"]]
                   :source-paths ["dev"]
                   }}
  :cljsbuild {:builds [{:source-paths ["src"]
                        :jar true
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :asset-path "js/out"
                                   :main "memory.client"
                                   :optimizations :none
                                   :recompile-dependents true
                                   :source-map "resources/public/js/sourcemap"
                                }}]})

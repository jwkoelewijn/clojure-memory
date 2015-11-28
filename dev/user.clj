(ns user
  (:require [reloaded.repl :refer [system reset stop]]
            [memory.system]))

(reloaded.repl/set-init! #'memory.system/create-system)

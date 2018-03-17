(ns mmzsource.github.io.views
  (:require [re-frame.core :as re-frame]
            [mmzsource.github.io.subs :as subs]
            ))

(comment
  (defn main-panel []
    (let [name (re-frame/subscribe [::subs/name])]
      [:div "Hello from " @name]))
  )

(defn main-panel []
  [:div
   [:h1 "Hello World!"]])

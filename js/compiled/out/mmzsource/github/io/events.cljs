(ns mmzsource.github.io.events
  (:require [re-frame.core :as re-frame]
            [mmzsource.github.io.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

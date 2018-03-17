(ns figwheel.connect.build-dev (:require [mmzsource.github.io.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mmzsource.github.io.core.mount-root (apply js/mmzsource.github.io.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mmzsource.github.io.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


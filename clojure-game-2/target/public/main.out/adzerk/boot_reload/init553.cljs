(ns adzerk.boot-reload.init553 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:55817" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})
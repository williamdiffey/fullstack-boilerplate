import React, { Suspense } from "react"
import { Router } from "@reach/router"

import AppProvider from "../components/providers/AppProvider"
import CheckAuth from "../components/CheckAuth"

import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import Page from "../components/Page"

function Application() {
  return (
    <AppProvider>
      <Suspense fallback={<Page />}>
        <CheckAuth>
          <Router>
            <Dashboard path="/" />
            <NotFound default={true} />
          </Router>
        </CheckAuth>
      </Suspense>
    </AppProvider>
  )
}

export default Application
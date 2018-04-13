import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { LayoutContainer } from 'containers'
import { AboutPage, HomePage, NoMatchPage, TablePage } from 'pages'

export default (
  <LayoutContainer>
    <Switch>
      <Route exact path="/" component={TablePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </LayoutContainer>
)

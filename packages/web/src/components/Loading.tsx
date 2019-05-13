import React, { memo, Fragment, ReactNode } from "react"
import styled from "../application/theme"

interface LoadingProps {
  loading: boolean
  children: ReactNode
}

const Loading = ({ loading, children }: LoadingProps) => {
  return (
    <Fragment>
      <StyledContainer loading={loading} />
      {!loading && children}
    </Fragment>
  )
}

export default memo(Loading)

const StyledContainer = styled.div<{ loading: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: opacity 0.4s, visibility -0.3s linear 0.5s;
  background-color: white;

  ${p => p.theme.flexCenter};
  visibility: ${p => (p.loading ? "visible" : "hidden")};
  opacity: ${p => (p.loading ? 1 : 0)};
`
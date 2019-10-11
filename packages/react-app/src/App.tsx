import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"
import { helloLerna } from "common"

const useStyles = makeStyles({
    app: {
        textAlign: "center",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    }
})

const App: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.app}>
            <p>{helloLerna()}</p>
        </div>
    )
}

export default App

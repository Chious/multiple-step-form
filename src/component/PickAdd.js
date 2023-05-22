import React, { Component } from 'react'
import { Box, Checkbox, Button, Grid, FormControlLabel, FormGroup } from '@mui/material';
import { ReactComponent as Sidebar } from "../assets/images/bg-sidebar-desktop.svg"

export class PickAdd extends Component {


    countinue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props

        const Label = (
            <Box
                width="350px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
            >
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <p style={{ margin: 0 }}>Online service</p>
                    <p style={{ margin: 0 }}>Accress to multiplayer games</p>
                </div>

                <p style={{ position: 'relative', right: 0 }}>+$10/yr</p>
            </Box>
        )

        return (<>
            <Box className='main' sx={{ boxShadow: 1 }} style={{ width: 1000, height: 568, position: "fixed", top: "10%", left: "20%" }}>
                <Grid container>
                    <Grid item lg={3}>
                        <Sidebar style={{ position: "absolute" }} />
                        <div style={{ position: "relative", zIndex: 1, left: 20, top: 20 }}>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', height: "50px" }}>
                                <p style={{ height: 40, width: 40, marginRight: 20, background: "white", borderRadius: "50%", fontSize: "25px", display: 'flex', justifyContent: "center" }}>1</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <p style={{ margin: 0, color: "hsl(231, 11%, 63%)", fontWeight: 500 }}>Step 1</p>
                                    <p style={{ margin: 0, color: "white", fontWeight: 700 }}>Your info</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', height: "50px" }}>
                                <p style={{ height: 40, width: 40, marginRight: 20, background: "white", borderRadius: "50%", fontSize: "25px", display: 'flex', justifyContent: "center" }}>2</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <p style={{ margin: 0, color: "hsl(231, 11%, 63%)", fontWeight: 500 }}>Step 2</p>
                                    <p style={{ margin: 0, color: "white", fontWeight: 700 }}>Select plan</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', height: "50px" }}>
                                <p style={{ height: 40, width: 40, marginRight: 20, background: "white", borderRadius: "50%", fontSize: "25px", display: 'flex', justifyContent: "center" }}>3</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <p style={{ margin: 0, color: "hsl(231, 11%, 63%)", fontWeight: 500 }}>Step 3</p>
                                    <p style={{ margin: 0, color: "white", fontWeight: 700 }}>Add-ons</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', height: "50px" }}>
                                <p style={{ height: 40, width: 40, marginRight: 20, background: "white", borderRadius: "50%", fontSize: "25px", display: 'flex', justifyContent: "center" }}>4</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <p style={{ margin: 0, color: "hsl(231, 11%, 63%)", fontWeight: 500 }}>Step 4</p>
                                    <p style={{ margin: 0, color: "white", fontWeight: 700 }}>Summary</p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item lg={9}>
                        <Box style={{ display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap" }}>
                            <h1 style={{ marginBottom: 0 }}>Pick Add-ons</h1>
                            <p style={{ marginTop: 0 }}>Add-ons enchance your gaming experience</p>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label={Label} />
                                <FormControlLabel control={<Checkbox defaultChecked />} label={Label} />
                                <FormControlLabel control={<Checkbox defaultChecked />} label={Label} />
                            </FormGroup>

                            <Button
                                onClick={this.countinue}
                                sx={{ width: 200 }}
                            >Next</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
        )
    }
}

export default PickAdd

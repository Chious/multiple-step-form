import React, { Component } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material';
import { ReactComponent as Sidebar } from "../assets/images/bg-sidebar-desktop.svg"

export class FinishUp extends Component {

    countinue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props

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
                            <h1 style={{ marginBottom: 0 }}>Finish up</h1>
                            <p style={{ marginTop: 0 }}>Double-check everything looks OK before confirming.</p>
                            <p>Name</p>
                            <TextField
                                sx={{ width: 550 }}
                                placeholder="Enter Your Name"
                                onChange={handleChange("Name")}
                                defaultValue={values.Name}
                            />
                            <p>Email Address</p>
                            <TextField
                                sx={{ width: 550 }}
                                placeholder="Enter Your Email Address"
                                onChange={handleChange("EmailAddress")}
                                defaultValue={values.EmailAddress}
                            />
                            <p>Name</p>
                            <TextField
                                sx={{ width: 550 }}
                                placeholder="Enter Your Phone Number"
                                onChange={handleChange("PhoneNumber")}
                                defaultValue={values.PhoneNumber}
                            />

                            <div className='submit'>
                                <Button
                                    onClick={this.prev}
                                    style={{ width: 200 }}
                                >Previous</Button>
                                <Button
                                    onClick={this.countinue}
                                    style={{ width: 200 }}
                                >Next</Button>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
        )
    }
}

export default FinishUp

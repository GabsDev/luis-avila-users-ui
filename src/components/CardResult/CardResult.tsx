import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Result } from "../../types";
import StyledComponents from "./styles";

const { MyTypography, MyA } = StyledComponents;

interface Props {
    result: Result;
}

export default function CardResult(props: Props) {
    const { result } = props;

    return (
        <div>
            <div></div>
            <Box sx={{ position: "absolute" }}>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <MyTypography variant="subtitle1">{result.id}</MyTypography>
                    </Grid>
                    <Grid item md={3}>
                        <MyTypography variant="subtitle1">{result.fullName}</MyTypography>
                    </Grid>
                    <Grid item md={3}>
                        <MyTypography variant="subtitle1">{result.birth}</MyTypography>
                    </Grid>
                </Grid>
                <hr />
            </Box>
        </div>
    );
}

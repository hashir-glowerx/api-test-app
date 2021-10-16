import { Grid, Paper, Box, Link } from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";

// Custom components
import Input from "../../components/Input";
import Button from "../../components/Button";

// Hooks
import { useFormik } from "formik";

// Validation classes
import LoginValidation from "../../validations/login";

// Custom css file
import "../../common.css";

const Login = () => {
  const { loginStatus, setLoginStatus } = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      // submit form
    },
    validationSchema: LoginValidation.stg,
  });

  const renderSignUpForm = () => {
    return (
      <Box
        sx={{
          "& .MuiTextField-root": { marginY: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={formik.handleSubmit} className="card-container__form">
          <Input
            required
            label="Email"
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            helperText={formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
            value={formik.values.email}
          />
          <Input
            required
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            helperText={formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Button loading={loginStatus} type="submit" value={"Login"} fullWidth color="primary" variant="outlined" />
        </form>
      </Box>
    );
  };

  return (
    <div className="full-page full-page__page-center">
      <Grid item={true} xs={10} sm={4} xl={4}>
        <Paper className="card-container">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX///+CvENOjEGDwUZOjT7R3sxAhi1NjUBBhjPD1cD///0oKSudyWt/uz/Pz88ZGx58fHyNwVcAAADr8Oh3tENcmUF7uDX5/fZHizX4+PhnaGktLjBSUlLf7NBOT1Lb29wgISTt8+KGr36KxE8cHiDq6upVkkC5ubnw8PAKDRGwsLATFRg5OjxcXFzGxsZ4ui7F3qms0IeOjo5FRUWlpaU2NzmhyXjE3aqUw2T0+evO5Lh3d3ecnJ1nZ2iFhoh6tDfk8te61pinzoLT5b+cxXB3rkePxl1lpEHA1rRwo2ZnnVxdmVBysTugyImpw6KhwpeMsIKqw6hpoFJSljiYuIWAo3mcAAAPBklEQVR4nO2dCXvithaGDaFALIzDTGIWsYiJCRCzL1kIYcgks7Y3be/t//8tV5JtvBuxG+qvzzNNjB30+ugcHR0LwXGhQoUKFSpUqFChQoU6ffE8R/47Zc0nk0n10I3YlbD9SpnPElZmkuVO0pLVN0mIYAmCFCGMpyWeq/Y/Uz4qAdvxlIyIWbK9iCQYhFjSw+vJBB0M8pqRLHiqHd9Kh27alsSXHmz20xmFu+opmLF699kNT2PsPx66fZuJ57J9d/st3FF64Y956Mi+SJIP3pGHVTXALOFT7Zgp8SQhODaRAMPCRxnv5odu7orCBpnfOQcIn74q9I8srD72BWYDqohS5OVYMjlsP5LBrMSnMl5PjiPL4XGAWaF/miVlXg/d+uUiU6RVHNBux1TgZ4/8XXf1Dmph7AedcZ5a34RUwQ85/D1u5AaQQuCLAPzmZhTw5PEwiEzvSepp9x7ZtiAIpFAjLLWxcKAsJ898ZvWh69bsyNtLbzLp3UWWGxlnOft3x1fhhXFIxqf1JOu0SZCEeyNKllLdpWYUPt9n99pVs3dd4fMDa/bIc9WUedgQpC+WuS6NR8u035pc6VqgN3bCNs/RvFE3FA0dltcXxUV/xofSnkIO/6I1R+h+Ya876GaUhJ6jv5GO7Dv7X9h+9xkANkfVNNXD81XWC7EZJeFMbaTTEPaO7GVG4eVxx/NjPjuxRHe1tMJ2KemL30qe/YyfMJnx+n7H7li1OYwgsXYcUmR69W0dkxnJpGNbE6vS3K0V9kYIK7iGf/8i3uhdbDTf1If55oik9NfFPdDRpo0Il6vKVM/BWc7m74pndjhWfps7mrBbQp7rseSxON/bcNKR1QYEQbL79Y4JOeqNLLm6dPlxgzfh3xYc3Rfb+++akGdLcSJfc79t8C5Zo7gi9K0vrUZYXa8rzd+WZqpX0fiBCclzwtfU2ZqJ1pIU5+zyJrE/Qq/xcN6/7p6dnXUf1nkwiLMD74cAQuR7NBbdGeFjxlqWkDK21JSOL9nJN4JH1cWj18riSVB1ZxQub6KxLRJKX6zvjMOsqQPhPNHpadnSnSSdmdRNzdcZoKvu88avUVUbEfJ9fa4j4RmS9SX8zl/U+axAB17e+iJffcl0LXyU8W4dRhxUnYhX0a0QkgKSpE1VHU3TC70uCeLj5E1w4FFJX+brNcPaQ78mElshJJpkJK8pJ53OSZ/JQ2nefLDUv3bHo4jS6k+U8Ok9y1Od71FDGxPy2Z7fPKXat8VIPotzEU8+VeuUsLE36nw4xGyTcGVlM0v4sB0jayxG0MZGwWLAoBJiRrfgu+TvctVvZIS6MlwwyIQ4rEq91cNqD4eYaPQobHh2dvk9vrI38tyP5B4I+ezENxgyEV5eJWK5NaY95/sgrN75P5ZlIPx6FU3EAktIa2xdn+cHywgvv5N8MhZUwuxdV0u0PcuB/oSXVzGVL5CEPPe6mHUL0kvWHdGP8OuNjhdMQrLizjRfunav5XkTfifmSwSYsJSxPv+Tuq51bg9C3D1tChQhz/PZF2eVViIP1uyU7oSXUTtg0Ajnrit+BOHe4Y0ehA7AYBFyc6/apeQovxwpYcmrHhQShoQrKiRcXyGhSf8GQrdC2wkR4uTgTXIynhAh/UzFQ5eBMH6shET8q70m7CCM/1ynZYEhpNVNyYdwPb5AEZI1AF6EuXX5dpp5ezxuFlRC3lm2wbOqxy+SkzCh8plmJB61AlftcPbk9olP9bETbd/dvWuZvpSS7ITxn+dmouy8d73C0t/d2ZDnss6VEXQxi9rct26m51Z+40taWFUJc0nKp15DrDxJEXcVvswZ27HDKgZ5Itq3mrGbMtqVErA9Xe2YfaUZACWM/zLbz/QUThIY11Puupo4T3WNWlvE/CHIFGH3WC+Y7QkCJszFfz9fHOO5j71v1gGl7/IQ1qFdE2J31B5UClLfssAzpS2dcumrPF0b90c8+sN88E7q2rKCLssy9T3UvOlnXOmqQItSwsK0rnZ8/M8P6+/XLrmrsPyR2x4Iea56J0QcH5lLGctS3Ozo6H+uhMSOPxyXWrSXJzN4DHBGlJQpBrGs3826E369+eR/3Z4IXZSyRFl3O5rlRkge2SSPhJAy3vud7yRUa+K5oyGMCMK1X+y3E3690p64HQ9hRMiwE36/0Z/XnCrhjTHtCAmPhvAxJPTQ8RD+C3rpt+6JE5IpVdeFMH46hGQjkK6dMBl/X5LQHhWh+hk1gzAXj/259GPTx0WIp8avD5JOmIu9f1z+mYxAEV6zLCDlJ6SKcxPD9mOq8QeJMBJhqC3RfWuuuznKx1A25d+DRCiQz+qy6PHlH8aVpr/9jNv5DmpDQYr0GHbr4Bf/LDnr41/JmBPwkIR0kri1fdey7zlHBz08IVY387r5x8rx9efRpCvf4QkjkmQqja8r7IBuHTQYhGTLhb7r7gLM8nDA4BBqWyCsq/x71CWCBoxQC6tr+eP5Ly8HDBTh2ttZ+jlgwAi1jZ5WgeSxAybcR4hgEtJdglf6mMyfuWX22yNh75JpewAaVhnteH6zxAGpYslfe9qtrtpn2HMlQsIq22ZWDA6IlUj+/mN/u0bNWXZAInZ0f8Jo0ce/WPiiOYY58zblsV7DxY5k/zyvoYNsUfB3jMUDE8lPe99OMXt/zbQFpG9Y5ZeOgFTYAc89/sLuxJO5HmNXpdmqy8fDsQOy2S/2nj/QNorVO7adPOleWI4m4hSUwX7RRPyvTfZs2Uj0GyvYGCWpb5kg83gOGMux8CV/sRU9dkc5uWYMOYJlj8Bz/xRbVy66fwe0yXWJmAdjZrGsA4+Ay1O0aCKW+DMYm7Xal4h5SZDUbV3wCMjSQaPxT8HZ47v0xjZykH1Dsn97FimsfL9+W7YX2v7k8R0drpCR/7JF0NjfAYFbiOxlxcR4tRwvmjvgCOEpnntkc0cGQtpBA6kqy7cFLCNMxA8/QniJ51g2ZF9CmIy+H5rDX/z9MkY/wlgsF0AHtAq745IvRvAjTNqW9gdT5Ou5/L5dxpsweRO4EcJVZJCeP3jvSu5FGIvvdxK/oXy+RMedMBb/GXQHtIhXV+2zEsZi5rX9xyPLTn2+hLno+3F8/4pVZJPsNxdGB2EsiUeI4+PT9PrgGB1thInk2h9uC4LcJh1XVvv9fn605tP1aPvuNTNhLHdUI4SncAbgShiLfzqqEcJPc5M7LgiTN8fsgA4Z7qgR5mIBn0OsKLriSzIIE7ljHiG89Kg+lCOExz1CeIlkAKQGcBVNkhTt5Ayo6fWh+7/YssXBxyzsjpN/TtABzTrGDHs18aePGGpvymPZj9Wm0/oh2rJ95dPTQrtcLj5fjCrm4+kP4tOh2rRN5UdlGSFZFPG/CLRNVkuL4OJw7dqaOkMExPHF6PZ2NCgqCMjFmv7SaRBORSiWO/pvtSkCAOld9SQIZwpEt+YDjWcEkWbFUyAcKRCmbceeEGqrP50AYUWBwA7IccVnrZu6EeYbjQ0qLfn8JlevoSJEU+fRhv6Dg7A2eioOW8PngXFbBrOZfn5tNqO3Jj+YLTr+6OJiMQDVbunV7VnHRDmd0QGpUZ8Vptz04qLDmYUv32hETitw6HdLbYSNGZSRqCh4WJGLektum8pIP+FZKZD/dZQPOlVDQWXtHWozqChNMEZNRRkuLuGe0Qf877QlIuWJq7VkS5+6lcX2RjZ/Am4mNGQl7IwRQE+36XRnOpSBqL8yBou7lEZKhTZ6kScMEKovrlbat7VGo1HBOHJbH5IKoMnl27IsFi+w4StjAI2ko4NAebNODSGo+L1uIawrUHzS21WHAGl391Y2gnGbsKVlRf+reQSL2gUigIsOyE8VMNT+VAEoXFkZj7SunkYA6r2+gkBrMTavpQrw76QWwooIZaNvcY0h1C01tBixxhUME051E1aa0NLYjgg09AIAF01TT6nL+p+rIbM911Iawbb/CSbCMkQD82sNAEW19XVRNhlxUFHkhRdCUFZ/atlj9kgW1ftVAFAZWF8BtFWNsVucX00dBJ+tR2oL0V9NhHUZDq3n4iNFerPzZiOKrQIq6KdMkaz2zLpz2CkCSC/ChGXrKwORdIJ8GaCNJzYdhw0vPjSJlKbaZBNhAVhTH47YRVSNhSOeYURg3PlGSzfhM0B2c4yQ2FH/sNyxvXSB0CBfAOKI21TED61HpsU2UQuWbYTY7ZSG7fIBQGob8O1e/J0pMnx7ihSt8RCO7SGjIqtxHJM4nK2ApzhAHNgPryGvWPoE7IQ1CJH9rFsEtEbUZVnrUDx2Hr1zGSasATgu2gXVv+1GmG9DuJ188UK3gk2uhMB+lkGIjTjWjonlqaxFydHChJgQKh9san6g/upGiLsH3NwJKUHTfbhwIWzBpv0sPNHS8wXsiWqDWvJtHir053xLHxC4PHD2Ul1uhLciQFDZNJBSPbsnNU5Crg1F+zviQ4sYMQQt2jQZYnLViHg8WLyM81+v9roQ1pugXWkBZcPBkKomQ2SPZDT8OwixwWwlGzwvaS2CT12mvWpIgmpjTHonNqERqEfI062chOkmKDe4CgRws4RG1a0IoR2xNgSOWEpDjdUMRUsKMCRRpU5MSMoGbWJO0yiAszfb6J3Xb46DsALUXA0npUN7+F5HUxHaok19jKCTEHc62DI3ZYaHBVMD6iI2YlEdwmpj7ENmE9Kktmy2SL7YelIjgJ2w1gJagMdpwmYTC6Plctu42+kCnsUYfgiN3P4JIxr1nILdKpioLo/Vswcy/tk6kA9EUDZIam2kz7lshI0y0CMwNxLRVoqZaTwVQsNZPZ1O12dlhLAddMKaAkEhXUmrGcuTAtFzvZbnGunBGABb9aOO+7uemtcgsJqQICoADlSW2hQiUY9wVsJ8GyjGMDEV0VZGxfwIiAiRYime2TafKqRSo5nuScQDOBCB2sHqAN8LMG5BfGqzYPeRIU5c9GMDBB25WKel4GlD4akwBKIyXNyeZ0vMLCDF7DMX8lYyG9L2i5aMBdojyrIgxEMvPgwLmgvlb4syFZw5IzmeYixGnhqwm5Ce0ZZFRVFEVDDRWwhnonUCQ+bHm2enujwqTLWa5XC+ku6k14/i5OptDHOhQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqCDq/7A3xtYl+bkwAAAAAElFTkSuQmCC"
            alt="Logo"
            width={150}
            height={150}
          />
          <span className="card-container__heading">
            <LockIcon fontSize={"small"} /> &nbsp; Log In
          </span>

          {renderSignUpForm()}

          <div className="card-container__footer">
            Create an account ? &nbsp;
            <Link href="/signup" underline="none">
              <span>Sign Up</span>
            </Link>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;

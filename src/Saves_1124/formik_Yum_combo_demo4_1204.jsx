import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PurpleForm = () => {
    const validationSchema = Yup.object({
        slot1: Yup.string().required("Required"),
        slot2: Yup.string().required("Required"),
        slot3: Yup.string().required("Required"),
        option: Yup.string().required("Pick one"),
    });

    const styles = {
        box: {
            backgroundColor: "#6a0dad", // purple
            color: "#fff",
            padding: "24px",
            borderRadius: "12px",
            maxWidth: "420px",
            margin: "24px auto",
            boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        },
        label: {
            display: "block",
            fontSize: "0.9rem",
            marginBottom: "6px",
            fontWeight: 600,
        },
        input: {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            outline: "none",
        },
        select: {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            outline: "none",
        },
        fieldWrap: {
            marginBottom: "16px",
        },
        error: {
            marginTop: "6px",
            fontSize: "0.8rem",
            color: "#ffe4e1",
        },
        button: {
            width: "100%",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#ffffff",
            color: "#6a0dad",
            fontWeight: 700,
            cursor: "pointer",
        },
    };

    return (
        <div style={styles.box}>
            <h2 style={{ marginTop: 0, marginBottom: 16 }}>One-box form</h2>

            <Formik
                initialValues={{ slot1: "", slot2: "", slot3: "", option: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    try {
                        // simulate success
                        alert("✅ Submission successful!\n\n" + JSON.stringify(values, null, 2));
                    } catch (err) {
                        alert("❌ Submission failed!");
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div style={styles.fieldWrap}>
                            <label htmlFor="slot1" style={styles.label}>
                                Slot 1
                            </label>
                            <Field id="slot1" name="slot1" placeholder="Enter value" style={styles.input} />
                            <ErrorMessage name="slot1">
                                {(msg) => <div style={styles.error}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div style={styles.fieldWrap}>
                            <label htmlFor="slot2" style={styles.label}>
                                Slot 2
                            </label>
                            <Field id="slot2" name="slot2" placeholder="Enter value" style={styles.input} />
                            <ErrorMessage name="slot2">
                                {(msg) => <div style={styles.error}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div style={styles.fieldWrap}>
                            <label htmlFor="slot3" style={styles.label}>
                                Slot 3
                            </label>
                            <Field id="slot3" name="slot3" placeholder="Enter value" style={styles.input} />
                            <ErrorMessage name="slot3">
                                {(msg) => <div style={styles.error}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div style={styles.fieldWrap}>
                            <label htmlFor="option" style={styles.label}>
                                Choose an option
                            </label>
                            <Field as="select" id="option" name="option" style={styles.select}>
                                <option value="" disabled>
                                    Select…
                                </option>
                                <option value="alpha">Alpha</option>
                                <option value="bravo">Bravo</option>
                                <option value="charlie">Charlie</option>
                                <option value="delta">Delta</option>
                            </Field>
                            <ErrorMessage name="option">
                                {(msg) => <div style={styles.error}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <button type="submit" disabled={isSubmitting} style={styles.button}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PurpleForm;

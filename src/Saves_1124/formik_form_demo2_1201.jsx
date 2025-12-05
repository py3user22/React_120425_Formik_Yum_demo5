import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Select,
    Textarea,
    Button,
    Text,
    Heading,
} from "@chakra-ui/react";

const inquirySchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    inquiryType: Yup.string().required("Please select an inquiry type"),
    comments: Yup.string().min(5, "Comments must be at least 5 characters"),
});

export default function InquiryFormCard() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            inquiryType: "",
            comments: "",
        },
        validationSchema: inquirySchema,
        onSubmit: (values) => {
            console.log("Form submitted:", values);
        },
    });

    return (
        <Card maxW="md" mx="auto" mt={8} boxShadow="lg"
              backgroundColor="purple"
        >
            <CardHeader>
                <Heading size="md" color="white" >Contact Me</Heading>
            </CardHeader>
            <CardBody>
                <form onSubmit={formik.handleSubmit}>

                    {/* Name */}
                    <Input
                        name="name" placeholder="Your Name" value={formik.values.name}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} mb={2}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <Text color="red.400">{formik.errors.name}</Text>
                    )}

                    {/* Email */}
                    <Input
                        type="email" name="email" placeholder="Your Email" value={formik.values.email}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} mb={2}

                    />
                    {formik.touched.email && formik.errors.email && (
                        <Text color="red.400">{formik.errors.email}</Text>
                    )}

                    {/* Inquiry Type Dropdown */}
                    <Select
                        name="inquiryType" placeholder="Select inquiry type" value={formik.values.inquiryType}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} mb={2}
                    >
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="sales">Sales</option>
                        <option value="other">Other</option>
                    </Select>
                    {formik.touched.inquiryType && formik.errors.inquiryType && (
                        <Text color="red.400">{formik.errors.inquiryType}</Text>
                    )}

                    {/* Comments / Suggestions */}
                    <Textarea
                        name="comments"
                        placeholder="Your comments or suggestions..."
                        value={formik.values.comments}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        mb={2} color="white"
                    />
                    {formik.touched.comments && formik.errors.comments && (
                        <Text color="red.400">{formik.errors.comments}</Text>
                    )}

                    {/* Submit Button */}
                    <Button type="submit" colorScheme="blue" mt={4} w="full">
                        Submit
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}
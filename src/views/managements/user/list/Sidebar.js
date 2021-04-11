// ** React Import
import { useState, useEffect } from "react"

// ** Custom Components
import Sidebar from "@components/sidebar"

// ** Utils
import { isObjEmpty } from "@utils"

// ** Third Party Components
import axios from "axios"
import classnames from "classnames"
import { useForm } from "react-hook-form"
import { Button, FormGroup, Label, FormText, Form, Input } from "reactstrap"

// ** Store & Actions
import { addUser } from "../store/action"
import { useDispatch, useSelector } from "react-redux"

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState("Client")

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.usersManagements)

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      // toggleSidebar()
      dispatch(
        addUser({
          fullname: values["full-name"],
          roles: [role],
          username: values.username,
          // contact: values.contact,
          email: values.email,
          password: 'Yolo220#'
          // status: "active",
          // avatar: ""
        })
      )
    }
  }

  const roleOptions = store.roles.map((item) => {
    return (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    )
  })

  return (
    <Sidebar
      size="lg"
      open={open}
      title="New User"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="full-name">
            Full Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="full-name"
            id="full-name"
            placeholder="John Doe"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["full-name"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">
            Username <span className="text-danger">*</span>
          </Label>
          <Input
            name="username"
            id="username"
            placeholder="johnDoe99"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["username"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["email"] })}
          />
          <FormText color="muted">
            You can use letters, numbers & periods
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="contact">
            Contact <span className="text-danger">*</span>
          </Label>
          <Input
            name="contact"
            id="contact"
            placeholder="(0909) xxx xxx"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["contact"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user-role">User Role</Label>
          <Input
            type="select"
            id="user-role"
            name="user-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roleOptions}
          </Input>
        </FormGroup>
        {/* <FormGroup
          className="mb-2"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <Label for="select-plan">Select Plan</Label>
          <Input type="select" id="select-plan" name="select-plan">
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
            <option value="company">Company</option>
            <option value="team">Team</option>
          </Input>
        </FormGroup> */}
        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers

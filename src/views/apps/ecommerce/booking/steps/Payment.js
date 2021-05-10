// ** Third Party Components
import { PlusCircle } from 'react-feather'
import { Form, Label, Input, Button, Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'
import { useState } from 'react'

const Payment = (props) => {
  const [cvv, setCvv] = useState('')

  return (
    <Form
      className='list-view product-checkout'
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='payment-type'>
        <Card>
          <CardHeader className='flex-column align-items-start'>
            <CardTitle tag='h4'>Payment options</CardTitle>
            <CardText className='text-muted mt-25'>Be sure to click on correct payment option</CardText>
          </CardHeader>
          <CardBody>
            <h6 className='card-holder-name my-75'>John Doe</h6>
            <CustomInput
              id='card'
              type='radio'
              defaultChecked
              label='US Unlocked Debit Card 12XX XXXX XXXX 0000'
              name='paymentMethod'
            />
            <div className='customer-cvv mt-1'>
              <div className='form-inline'>
                <Label className='mb-50' for='card-holder-cvv'>
                  Enter CVV:
                </Label>
                <Input className='input-cvv ml-sm-75 ml-0 mb-50' id='card-holder-cvv' onChange={(e) => setCvv(e)} />
              </div>
            </div>
            <hr className='my-2' />
            <ul className='other-payment-options list-unstyled'>
              <li className='py-50'>
                <CustomInput type='radio' label='Credit / Debit / ATM Card' name='paymentMethod' id='payment-card' />
              </li>
              <li className='py-50'>
                <CustomInput type='radio' label='Net Banking' name='paymentMethod' id='payment-net-banking' />
              </li>
              <li className='py-50'>
                <CustomInput type='radio' label='EMI (Easy Installment)' name='paymentMethod' id='payment-emi' />
              </li>
              <li className='py-50'>
                <CustomInput type='radio' label='Cash On Delivery' name='paymentMethod' id='payment-cod' />
              </li>
            </ul>
            <hr className='my-2' />
            <div className='gift-card mb-25'>
              <CardText>
                <PlusCircle className='mr-50' size={21} />
                <span className='align-middle'>Add Gift Card</span>
              </CardText>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className='amount-payable checkout-options'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Price Details</CardTitle>
          </CardHeader>
          <CardBody>
            <hr />
            <ul className='list-unstyled price-details'>
              <li className='price-detail'>
                <div className='details-title'>Amount Payable</div>
                <div className='detail-amt font-weight-bolder'>${props.total + Math.round(props.total * 0.1)}</div>
              </li>
            </ul>
            <Button.Ripple
                color='primary'
                classnames='btn-next place-order'
                block
                onClick={() => stepper.next()}
              >
                Finish
              </Button.Ripple>
          </CardBody>
        </Card>
      </div>
    </Form>
  )
}

export default Payment

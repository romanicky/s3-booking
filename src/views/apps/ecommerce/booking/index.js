// ** React Imports
import { Fragment, useEffect, useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Cart from './steps/Cart'
import Address from './steps/Address'
import Payment from './steps/Payment'

// ** Third Party Components
import { Archive, Home, CreditCard } from 'react-feather'
import Flatpickr from 'react-flatpickr'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, deleteCartItem, deleteWishlistItem, addToWishlist } from '../store/actions'
import { Label, Card, CardBody, CardText } from 'reactstrap'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const Booking = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [price] = useState([])
  const [total, setTotal] = useState(0)
  const [picker, setPicker] = useState(new Date())

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  // ** Get Cart Items on mount
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  const changeItem = (index, value) => {
    price[index] = value
    setTotal(price.reduce((sum, x) => sum + x))
  }

  const steps = [
    {
      id: 'booking',
      title: 'Booking',
      subtitle: 'Choose your room',
      icon: <Archive size={18} />,
      content: (
        <Cart
          stepper={stepper}
          dispatch={dispatch}
          products={store.cart}
          getCartItems={getCartItems}
          addToWishlist={addToWishlist}
          deleteCartItem={deleteCartItem}
          changeItem={changeItem}
          deleteWishlistItem={deleteWishlistItem}
          total={total}
          picker={picker}
        />
      )
    },
    {
      id: 'Address',
      title: 'Information',
      subtitle: 'Enter Your Information',
      icon: <Home size={18} />,
      content: <Address stepper={stepper} />
    },
    {
      id: 'payment',
      title: 'Payment',
      subtitle: 'Select Payment Method',
      icon: <CreditCard size={18} />,
      content: <Payment stepper={stepper} total={total}/>
    }
  ]

  return (
    <Fragment>
      <div>
        <Card className='mb-4'>
          <CardBody>
            <CardText>
            <Label for='range-picker'>Date</Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </CardText>
          </CardBody>
        </Card>
        
      </div>
      <Wizard
        ref={ref}
        steps={steps}
        className='checkout-tab-steps'
        instance={el => setStepper(el)}
        options={{
          linear: false
        }}
      />
    </Fragment>
  )
}

export default Booking

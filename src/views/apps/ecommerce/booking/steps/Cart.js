// ** React Imports

// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star, Check } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

// ** Custom Components
import NumberInput from '@components/number-input'

const Cart = props => {
  // ** Props
  const { products, stepper, changeItem, total, picker } = props

  const freeCancellationDate = new Date(picker)
  freeCancellationDate.setDate(freeCancellationDate.getDate() + 7)
  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Render cart items
  const renderCart = () => {
    return products.map((item, index) => {
      return (
        <Card key={item.name} className='ecommerce-card'>
          <div className='item-img'>
            <img className='img-fluid' src={item.image} alt={item.name} />
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <a href='/' className='detail-amt text-primary' onClick={e => e.preventDefault()}>
                  <strong>{item.name}</strong>
                </a>
              </h6>
              <span className='item-company'>
                By
                <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
                  {item.brand}
                </a>
              </span>
              <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item mr-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <span className='text-success mb-1'>{item.type}</span>
            <span>
              <Check size={14}/>
              Free cancellation before {formatDate(freeCancellationDate)}
            </span>
            <span>
              <Check size={14}/>
              Free Wifi
            </span>
            {item.hasBathTub && 
            <span>
              <Check size={14}/>
              Bath Tub
            </span>}
            {item.hasBreakfast && 
            <span>
              <Check size={14}/>
              Breakfast included
            </span>}
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <span className="badge badge-light-danger">Save {item.discountPercentage}% today</span> 
                <h4 className='item-price text-muted'><s>${item.price}</s></h4>
                <h4 className='item-price'>${item.price - Math.round(item.price * item.discountPercentage / 100)}</h4>
                {item.hasFreeShipping ? (
                  <CardText className='shipping'>
                    <Badge color='light-success' pill>
                      Free Cancellation
                    </Badge>
                  </CardText>
                ) : null}
                <div className='item-quantity'>
                  <span className='quantity-title mr-50'>Room(s)</span>
                  <NumberInput onChange={(e) => changeItem(index, e * (item.price - Math.round(item.price * item.discountPercentage / 100)))} value={0} min={0} max={10} size='sm' style={{ width: '7rem', height: '2.15rem' }} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      )
    })
  }

  return (
    <div className='list-view product-checkout'>
      <div className='checkout-items'>{products.length ? renderCart() : <h4>Your cart is empty</h4>}</div>
      <div className='checkout-options'>
        <Card>
          <CardBody>
            <label className='section-label mb-1'>Options</label>
            <InputGroup className='input-group-merge coupons'>
              <Input placeholder='Coupons' />
              <InputGroupAddon addonType='append'>
                <InputGroupText className='text-primary'>Apply</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <hr />
            <div className='price-details'>
              <h6 className='price-title'>Price Details</h6>
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Total</div>
                  <div className='detail-amt'>${total}</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Estimated Tax</div>
                  <div className='detail-amt'>${Math.round(total * 0.1)}</div> 
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt font-weight-bolder'>${total + Math.round(total * 0.1)}</div>
                </li>
              </ul>
              <Button.Ripple
                color='primary'
                classnames='btn-next place-order'
                block
                disabled={!total}
                onClick={() => stepper.next()}
              >
                Place booking
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart

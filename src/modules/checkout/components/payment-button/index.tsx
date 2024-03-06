import Button from "@modules/common/components/button"

type Props = {
  handlePayment: () => void
}

const PaymentButton = ({ handlePayment }: Props) => {
  return <Button onClick={handlePayment}>Checkout</Button>
}

export default PaymentButton

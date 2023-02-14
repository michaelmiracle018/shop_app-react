import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/products/productSlice';
import { closeModal } from '../../features/modal/modalSlice';
import './modal.scss'



const Modal = () => {

const {cartBag} = useSelector((store) => store.products)

  const dispatch = useDispatch();
  return (
		<aside className="modal_container">
			<div className="modal_wrap">
				<h4>
					{" "}
					{cartBag.length === 1
						? "remove item from your shopping cart?"
						: "remove all items from your shopping cart?"}{" "}
				</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn confirm-btn"
						onClick={() => {
							dispatch(clearCart());
							dispatch(closeModal());
						}}
					>
						confirm
					</button>
					<button
						type="button"
						className="btn clear-btn"
						onClick={() => {
							dispatch(closeModal());
						}}
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};
export default Modal;

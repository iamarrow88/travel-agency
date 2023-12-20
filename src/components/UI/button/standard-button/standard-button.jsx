function StandardButton({ slot, classNames }) {

  return (
    <button className={classNames}>{slot}</button>
  )
}

export default StandardButton;
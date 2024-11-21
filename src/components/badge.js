function Badge(props) {
  const { children } = props;
  let badgeClass = "badge ";
  if (children === "publish") {
    badgeClass += "bg-success";
  } else if (children === "pending") {
    badgeClass += "bg-warning";
  }

  return <span className={badgeClass}>{children}</span>;
}

export default Badge;

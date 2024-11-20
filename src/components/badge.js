function Badge(props) {
  const { label } = props;
  let badgeClass = "badge ";
  if (label === "Published") {
    badgeClass += "bg-success";
  } else if (label === "Pending Review") {
    badgeClass += "bg-warning";
  }

  return (
    <td>
      <span className={badgeClass}>{label}</span>
    </td>
  );
}

export default Badge;

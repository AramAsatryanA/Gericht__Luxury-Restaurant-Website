import { useSelector } from "react-redux";

import SectionSubtitle from "../../UI/SectionSubtitle";
import CustomersSectionItem from "./CustomersSectionItem";

import styles from "./CustomersSection.module.css";

function CustomersSection() {
  const { customers } = useSelector((state) => state.customersSectionContent);

  return (
    <section className={styles.section}>
      <div className={`container ${styles["section__container"]}`}>
        <SectionSubtitle text="Testimony" />
        <h2 className="section__title-h2">Happy Customers</h2>
        <ul className={styles.content}>
          {customers.map((customer, index) => (
            <CustomersSectionItem
              key={customer.name + index}
              customer={customer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CustomersSection;

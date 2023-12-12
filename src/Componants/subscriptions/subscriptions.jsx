import styles from "./subscriptions.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { subscriptionListService } from "../../services/all";

const Subscriptions = () => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    const subscriptionFunction = async () => {
      const data = await subscriptionListService();
      setData(data.data);
      // console.log(data, "ggggggg");
    };
    subscriptionFunction();
  }, []);

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.product_name,
    },
    {
      name: "Price",
      selector: (row) => row.company,
    },
    {
      name: "Validity",
      selector: (row) => row.subScription_type,
    },
    {
      name: "Expiry Date",
      selector: (row) => row.Expire_date,
    },
    {
      name: "Users",
      selector: (row) => row.number_of_users,
    },
  ];

  return (
    <div className={styles.topcontent1}>
      <div className={styles.personalDetailTable}>
        <div className={styles.about}>
          <p className={styles.personalHeading}>Subscription Details</p>
          <div className={styles.edit_icon}></div>
        </div>

        <div className={styles.rightTable}>
          <div className={styles.firstline}>
            <DataTable columns={columns} data={data1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

import Image from 'next/image';
import { Customer } from '../../types/properties';
import classes from './PropertyCardCustomer.module.scss';

interface PropertyCardCustomerProps {
  customer: Customer;
}

export const PropertyCardCustomer = ({
  customer,
}: PropertyCardCustomerProps) => {
  return (
    <div
      className={classes.propertyCard__customer__wrapper}
      data-testid="propertyCard-customer"
    >
      <Image
        src={customer.brandPlusLogoUrl}
        alt={`${customer.branchDisplayName} logo`}
        width={76}
        height={26}
      />
      <p>{customer.contactTelephone}</p>
      <p> Icon Contact</p>
    </div>
  );
};
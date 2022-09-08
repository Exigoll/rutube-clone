import styles from "./Field.module.scss";
import React, { forwardRef } from "react";
import { IField } from "./field.interface";

const Field: React.FC = forwardRef<HTMLInputElement, IField>(({ error, type = "text, ...rest" }, ref) => {
    return (
      <div className={styles.module}>
        <h1>Field</h1>
      </div>
    );
  },
);

export default Field;

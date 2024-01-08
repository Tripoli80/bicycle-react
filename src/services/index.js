
export const checkFormData = (data) => {
    const { name, type, color, wheel_size, price, description, status } = data;
    // Basic validation rules
    if (!name || name.length < 5) {
      return { error: "Invalid name" };
    }
    if (!type || type.length < 5) {
      return { error: "Invalid type" };
    }
    if (!color || color.length < 5) {
      return { error: "Invalid color" };
    }
    if (!wheel_size || isNaN(wheel_size)) {
      return { error: "Invalid wheel size" };
    }
    if (!price || isNaN(price)) {
      return { error: "Invalid price" };
    }
    if (!description || description.length < 5) {
      return { error: "Invalid description" };
    }
    if (!status || !["available", "busy", "unavailable"].includes(status)) {
      return { error: "Invalid status" };
    }
    return true;
};

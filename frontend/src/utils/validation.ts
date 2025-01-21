// src/utils/validation.ts
export interface ValidationError {
    field: string;
    message: string;
  }
  
  export const validateCheckoutForm = (data: {
    name: string;
    email: string;
    address: string;
    phone: string;
  }): ValidationError[] => {
    const errors: ValidationError[] = [];
  
    if (!data.name.trim()) {
      errors.push({ field: 'name', message: 'お名前を入力してください' });
    }
  
    if (!data.email.trim()) {
      errors.push({ field: 'email', message: 'メールアドレスを入力してください' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push({ field: 'email', message: '有効なメールアドレスを入力してください' });
    }
  
    if (!data.address.trim()) {
      errors.push({ field: 'address', message: '住所を入力してください' });
    }
  
    if (!data.phone.trim()) {
      errors.push({ field: 'phone', message: '電話番号を入力してください' });
    } else if (!/^[0-9-]{10,}$/.test(data.phone.replace(/[-\s]/g, ''))) {
      errors.push({ field: 'phone', message: '有効な電話番号を入力してください' });
    }
  
    return errors;
  };
  
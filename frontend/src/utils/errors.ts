export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// HTTP 400系エラー
export class BadRequestError extends APIError {
  constructor(message = 'Bad Request') {
    super(message, 400, 'BAD_REQUEST');
  }
}

export class UnauthorizedError extends APIError {
  constructor(message = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
  }
}

export class ForbiddenError extends APIError {
  constructor(message = 'Forbidden') {
    super(message, 403, 'FORBIDDEN');
  }
}

export class NotFoundError extends APIError {
  constructor(message = 'Not Found') {
    super(message, 404, 'NOT_FOUND');
  }
}

// HTTP 500系エラー
export class InternalServerError extends APIError {
  constructor(message = 'Internal Server Error') {
    super(message, 500, 'INTERNAL_SERVER_ERROR');
  }
}

// バリデーションエラー
export class ValidationError extends APIError {
  constructor(message = 'Validation Error') {
    super(message, 422, 'VALIDATION_ERROR');
  }
}

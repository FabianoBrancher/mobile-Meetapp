export function subscriptionRequest(id) {
  return {
    type: '@subscription/SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function subscriptionSuccess() {
  return {
    type: '@subscription/SUBSCRIPTION_SUCCESS',
  };
}

export function subscriptionCancelRequest(id) {
  return {
    type: '@subscription/SUBSCRIPTION_CANCEL_REQUEST',
    payload: { id },
  };
}

export function subscriptionCancelSuccess() {
  return {
    type: '@subscription/SUBSCRIPTION_CANCEL_SUCCESS',
  };
}

export function subscriptionFailure() {
  return {
    type: '@subscription/SUBSCRIPTION_FAILURE',
  };
}

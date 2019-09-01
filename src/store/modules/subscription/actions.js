export function subscriptionRequest(id) {
  return {
    type: '@subscription/SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function subscriptionSuccess(subscription) {
  return {
    type: '@subscription/SUBSCRIPTION_SUCCESS',
    payload: { subscription },
  };
}

export function subscriptionCancelRequest(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function subscriptionCancelSuccess() {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_SUCCESS',
  };
}

export function subscriptionFailure() {
  return {
    type: '@subscription/SUBSCRIPTION_FAILURE',
  };
}

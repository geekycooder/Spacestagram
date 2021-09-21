export const getPreviousMonthDate = () => {
  let today = new Date();
  let priorDate = new Date().setDate(today.getDate() - 30);
  return new Date(priorDate).toISOString().split('T')[0];
};

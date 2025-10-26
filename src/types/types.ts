export type ApiResponse = {
  success: boolean;
  message?: string;
  data?: unknown | unknown[];
};

export interface HabitType {
  title: string;
  startDate: Date;
  endDate: Date;
  reminder: string;
  timeOfDay: string;
}

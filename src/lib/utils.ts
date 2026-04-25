import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export function getGrade(percentage: number): string {
  if (percentage >= 90) return 'O';
  if (percentage >= 80) return 'A+';
  if (percentage >= 70) return 'A';
  if (percentage >= 60) return 'B+';
  if (percentage >= 50) return 'B';
  if (percentage >= 40) return 'C';
  return 'F';
}

export const GRADE_SCALE = [
  { grade: 'O', range: '90–100', label: 'Outstanding' },
  { grade: 'A+', range: '80–89', label: 'Excellent' },
  { grade: 'A', range: '70–79', label: 'Very Good' },
  { grade: 'B+', range: '60–69', label: 'Good' },
  { grade: 'B', range: '50–59', label: 'Above Average' },
  { grade: 'C', range: '40–49', label: 'Average' },
  { grade: 'F', range: 'Below 40', label: 'Fail' },
];

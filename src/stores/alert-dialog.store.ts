import { create } from 'zustand';

interface AlertDialogProps {
  title: string;
  description: string;
  onDelete: () => void;
}

interface AlertDialogStoreProps {
  alertdialog: AlertDialogProps | null;
  open: boolean;
  initialize: (dialog: AlertDialogProps) => void;
  onClose: () => void;
}

export const useAlertDialogStore = create<AlertDialogStoreProps>((set) => ({
  alertdialog: null,
  open: false,
  initialize: (alertdialog: AlertDialogProps) => {
    set({ alertdialog, open: true });
  },
  onClose: () => {
    set({ alertdialog: null, open: false });
  },
}));

import { PropsWithChildren } from 'react';
import { create } from 'zustand';

interface DialogProps extends PropsWithChildren {
  title?: string;
  description?: string;
  classes?: {
    content?: string;
    header?: string;
  } | null;
}

interface DialogStoreProps {
  dialog: DialogProps | null;
  open: boolean;
  initialize: (dialog: DialogProps) => void;

  onClose: () => void;
}

export const useDialogStore = create<DialogStoreProps>((set) => ({
  dialog: null,
  open: false,
  initialize: (dialog: DialogProps) => {
    set({ dialog, open: true });
  },
  onClose: () => {
    set({ dialog: null, open: false });
  },
}));

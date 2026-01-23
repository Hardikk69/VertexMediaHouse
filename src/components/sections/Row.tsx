interface RowProps {
  children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 items-center gap-x-12">
      {children}
    </div>
  );
};

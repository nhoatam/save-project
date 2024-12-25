import React, { createContext, useContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho context
interface AppContextType {
  sharedState: boolean;
  setSharedState: (value: boolean) => void;
}

// Tạo context với giá trị mặc định
const AppContext = createContext<AppContextType | undefined>(undefined);

// Tạo Provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sharedState, setSharedState] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

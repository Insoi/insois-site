"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useRef, ReactNode,
} from "react";

type NotificationVariant = "default" | "success" | "error" | "warning";

interface Notification {
    id: string;
    message: string;
    variant?: NotificationVariant;
    duration?: number; // in ms - default is 2500 aka 2.5 seconds
}

interface NotificationContextValue {
    notification: (message: string, options?: Omit<Notification, "id" | "message">) => void;
}

const NOTIFICATION_CONTEXT = createContext<NotificationContextValue | null>(null);

export function useNotification() {
    const context = useContext(NOTIFICATION_CONTEXT);
    if (!context) throw new Error("useNotification must be used within the context");
    return context;
}

const ACCENT_COLORS: Record<NotificationVariant, string> = {
    default: "#DDDDCC",
    success: "#8fbc8f",
    error: "#c97a7a",
    warning: "#c9a96e",
}

function NotificationItem({ notification, onRemove }: { notification: Notification, onRemove: (id: string) => void }) {
    const [exiting, setExiting] = React.useState(false);
    const accent = ACCENT_COLORS[notification.variant ?? "default"];

    const dismiss = useCallback(() => {
        setExiting(true);
        setTimeout(() => onRemove(notification.id), 320);
    }, [notification.id, onRemove]);

    React.useEffect(() => {
        const t = setTimeout(dismiss, notification.duration ?? 2500);
        return () => clearTimeout(t);
    }, [dismiss, notification.duration]);

    return (
        <div
            onClick={dismiss}
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.65rem 1rem 0.65rem 0.85rem",
                background: "rgba(43, 43, 43, 0.33)",
                maxWidth: "340px",
                width: "max-content",
                animation: exiting ? "notification-out 0.42s cubic-bezier(0.4,0,1,1)" : "notification-in 0.38s cubic-bezier(0.16,1,0.3,1) forwards",
                willChange: "transform, opacity",
            }}
        >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent }} />
            <span style={{ fontFamily: "karmilla-bold", fontSize: "0.88rem", lineHeight: 1.35 }}>
                {notification.message}
            </span>
        </div>
    )
}

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotification] = useState<Notification[]>([]);
    const counter = useRef(0);

    const notification = useCallback(
        (message: string, options?: Omit<Notification, "id" | "message">) => {
            const id = "notification-" + ++counter.current;
            setNotification((prev) => [...prev, { id, message, ...options }]);
        }, []);

    const remove = useCallback((id: string) => {
        setNotification((prev) => prev.filter((n) => n.id !== id));
    }, []);

    return (
        <NOTIFICATION_CONTEXT value={{ notification }}>
            {children}

            <div style={{ position: "fixed", top: "1.25rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 1000, pointerEvents: "none" }}>
                {notifications.map((n) => (
                    <div key={n.id} style={{ pointerEvents: "auto" }}>
                        <NotificationItem notification={n} onRemove={remove} />
                    </div>
                ))}
            </div>

            <style>{"" +
                "@keyframes notification-in {" +
                "from { opacity: 0; transform: translateY(-10px) scale(0.96); }" +
                "to   { opacity: 1; transform: translateY(0)     scale(1); }" +
                "}" +
                "@keyframes notification-out {" +
                "from { opacity: 1; transform: translateY(0)    scale(1); }" +
                "to   { opacity: 0; transform: translateY(-14px) scale(0.9) blur(2px); }" +
                "}" +
                ""}</style>
        </NOTIFICATION_CONTEXT>
    );
}

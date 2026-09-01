import React from 'react';

/** A quiet, layered background that gives translucent surfaces something to refract. */
export const AmbientBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080713]" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(167,139,250,.30),transparent_30%),radial-gradient(circle_at_90%_22%,rgba(34,211,238,.20),transparent_28%),radial-gradient(circle_at_52%_100%,rgba(59,130,246,.14),transparent_35%),linear-gradient(135deg,#090617_0%,#10133a_52%,#061d29_100%)]" />
    <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(196,181,253,.75)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,.7)_1px,transparent_1px)] [background-size:52px_52px]" />
  </div>
);

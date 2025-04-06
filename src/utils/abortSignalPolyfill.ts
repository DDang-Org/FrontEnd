/**
 * Polyfill for AbortSignal.throwIfAborted method
 * This adds the missing throwIfAborted method to the AbortSignal prototype
 * which is required by @stomp/stompjs v7.0.0
 */

// Use a more targeted approach to avoid TypeScript errors
if (typeof AbortSignal !== 'undefined') {
  const abortSignalProto = AbortSignal.prototype as any;
  
  // Check if throwIfAborted is not already defined
  if (!abortSignalProto.throwIfAborted) {
    // Add the throwIfAborted method to the AbortSignal prototype
    abortSignalProto.throwIfAborted = function() {
      if (this.aborted) {
        // Create an AbortError and throw it
        const error = new DOMException('The operation was aborted', 'AbortError');
        throw error;
      }
    };
    
    console.log('[Polyfill] Added throwIfAborted method to AbortSignal prototype');
  }
}

export {}; // This makes the file a module
